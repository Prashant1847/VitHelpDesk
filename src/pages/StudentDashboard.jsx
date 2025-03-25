import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import studentQueries from '../data/studentQueries';
import './StudentDashboard.css';

const StudentDashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [queries, setQueries] = useState(studentQueries);
  const [filter, setFilter] = useState('all');
  const [newQuery, setNewQuery] = useState({
    subject: '',
    description: ''
  });
  const [showNewQueryForm, setShowNewQueryForm] = useState(false);

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (!userData) {
      navigate('/login');
      return;
    }

    const user = JSON.parse(userData);
    // Strict role checking - ensure it's a student
    if (user.role === 'admin') {
      navigate('/login');
      return;
    }

    setUser(user);
  }, [navigate]);

  const handleSubmitQuery = (e) => {
    e.preventDefault();
    
    const newQueryData = {
      id: queries.length + 1,
      ...newQuery,
      status: 'pending',
      createdAt: new Date().toLocaleString()
    };
    
    setQueries([...queries, newQueryData]);
    setNewQuery({ subject: '', description: '' });
    setShowNewQueryForm(false);
  };

  const filteredQueries = queries.filter(query => {
    if (filter === 'all') return true;
    return query.status === filter;
  });

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Welcome, {user?.name}</h1>
        <button 
          className="btn btn-primary"
          onClick={() => setShowNewQueryForm(true)}
        >
          New Query
        </button>
      </div>

      {showNewQueryForm && (
        <div className="query-form-container">
          <h2>Submit New Query</h2>
          <form onSubmit={handleSubmitQuery}>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                value={newQuery.subject}
                onChange={(e) => setNewQuery({...newQuery, subject: e.target.value})}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                value={newQuery.description}
                onChange={(e) => setNewQuery({...newQuery, description: e.target.value})}
                required
              />
            </div>
            <div className="form-actions">
              <button type="submit" className="btn btn-primary">Submit Query</button>
              <button 
                type="button" 
                className="btn btn-secondary"
                onClick={() => setShowNewQueryForm(false)}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="queries-section">
        <div className="queries-header">
          <h2>Your Queries</h2>
          <div className="filter-section">
            <label htmlFor="status-filter">Filter by Status:</label>
            <select
              id="status-filter"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              <option value="all">All Queries</option>
              <option value="pending">Pending</option>
              <option value="inProgress">In Progress</option>
              <option value="resolved">Resolved</option>
              <option value="closed">Closed</option>
            </select>
          </div>
        </div>
        {filteredQueries.length === 0 ? (
          <p className="no-queries">No queries found for the selected status.</p>
        ) : (
          <div className="queries-grid">
            {filteredQueries.map((query) => (
              <div key={query.id} className="query-card">
                <h3>{query.subject}</h3>
                <p>{query.description}</p>
                <div className="query-status">
                  Status: <span className={`status-${query.status}`}>{query.status}</span>
                </div>
                {query.response && (
                  <div className="query-response">
                    <strong>Response:</strong>
                    <p>{query.response}</p>
                  </div>
                )}
                <div className="query-date">
                  Submitted: {query.createdAt}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentDashboard; 
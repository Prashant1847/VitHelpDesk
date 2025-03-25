import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import sampleQueries from '../data/sampleQueries';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [queries, setQueries] = useState(sampleQueries);
  const [selectedQuery, setSelectedQuery] = useState(null);
  const [response, setResponse] = useState('');
  const [filter, setFilter] = useState('all');
  const [tempStatus, setTempStatus] = useState('');

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (!userData) {
      navigate('/admin-login');
      return;
    }

    const user = JSON.parse(userData);
    // Strict role checking
    if (!user.role || user.role !== 'admin') {
      navigate('/admin-login');
      return;
    }
  }, [navigate]);

  useEffect(() => {
    if (selectedQuery) {
      setTempStatus(selectedQuery.status);
    }
  }, [selectedQuery]);

  const handleSubmitResponse = (e) => {
    e.preventDefault();

    setQueries(queries.map(q => 
      q.id === selectedQuery.id ? { ...q, response, status: tempStatus } : q
    ));
    setSelectedQuery(null);
    setResponse('');
    setTempStatus('');
  };

  const filteredQueries = queries.filter(query => {
    if (filter === 'all') return true;
    return query.status === filter;
  });

  return (
    <div className="admin-dashboard-container">
      <div className="admin-header">
        <h1>Admin Dashboard</h1>
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

      <div className="section-headers">
        <h2>Student Queries ({filteredQueries.length})</h2>
        <h2>Query Details</h2>
      </div>

      <div className="admin-content">
        <div className="queries-list">
          {filteredQueries.map((query) => (
            <div 
              key={query.id} 
              className={`query-item ${selectedQuery?.id === query.id ? 'selected' : ''}`}
              onClick={() => setSelectedQuery(query)}
            >
              <div className="query-header">
                <h3>{query.subject}</h3>
                <span className={`status-badge status-${query.status}`}>
                  {query.status}
                </span>
              </div>
              <p className="query-preview">{query.description}</p>
              <div className="query-meta">
                <span>From: {query.studentName}</span>
                <span>Date: {query.createdAt}</span>
              </div>
            </div>
          ))}
        </div>

        {selectedQuery ? (
          <div className="query-details">
            <div className="detail-card">
              <div className="detail-header">
                <h3>{selectedQuery.subject}</h3>
                <select
                  value={tempStatus}
                  onChange={(e) => setTempStatus(e.target.value)}
                >
                  <option value="pending">Pending</option>
                  <option value="inProgress">In Progress</option>
                  <option value="resolved">Resolved</option>
                  <option value="closed">Closed</option>
                </select>
              </div>
              <div className="detail-content">
                <p>{selectedQuery.description}</p>
                <div className="student-info">
                  <strong>Student Information:</strong>
                  <p>Name: {selectedQuery.studentName}</p>
                  <p>Email: {selectedQuery.studentEmail}</p>
                  <p>Registration: {selectedQuery.registrationNumber}</p>
                </div>
                {selectedQuery.response && (
                  <div className="previous-response">
                    <strong>Previous Response:</strong>
                    <p>{selectedQuery.response}</p>
                  </div>
                )}
              </div>
              <form onSubmit={handleSubmitResponse} className="response-form">
                <div className="form-group">
                  <label htmlFor="response">Your Response</label>
                  <textarea
                    id="response"
                    value={response}
                    onChange={(e) => setResponse(e.target.value)}
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit Response
                </button>
              </form>
            </div>
          </div>
        ) : (
          <div className="query-details empty-state">
            <p>Select a query from the list to view details</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
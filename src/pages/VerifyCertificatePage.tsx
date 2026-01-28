import React, { useState } from 'react';
import './VerifyCertificatePage.css';

const VerifyCertificatePage: React.FC = () => {
  const [certificateNumber, setCertificateNumber] = useState('');
  const [verificationResult, setVerificationResult] = useState<any>(null);
  const [isVerifying, setIsVerifying] = useState(false);

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    setIsVerifying(true);
    
    // Simulate API call
    setTimeout(() => {
      // Mock verification result
      const mockResult = {
        valid: true,
        certificateNumber: certificateNumber,
        traineeName: "John Doe",
        course: "Basic Offshore Safety Induction and Emergency Training (BOSIET)",
        completionDate: "2023-11-15",
        expiryDate: "2024-11-15",
        status: "Valid",
        verificationDate: new Date().toISOString().split('T')[0]
      };
      
      setVerificationResult(mockResult);
      setIsVerifying(false);
    }, 1500);
  };

  const handleReset = () => {
    setCertificateNumber('');
    setVerificationResult(null);
  };

  return (
    <div className="verify-page">
      {/* Hero Banner */}
      <section className="verify-hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Verify Certificate</h1>
            <p className="hero-subtitle">
              Authenticate training certificates issued by our academy
            </p>
          </div>
        </div>
      </section>

      {/* Verification Form */}
      <section className="verification-section">
        <div className="container">
          <div className="verification-card">
            <div className="verification-header">
              <h2>Certificate Verification</h2>
              <p>Enter the certificate number to verify its authenticity</p>
            </div>
            
            <form onSubmit={handleVerify} className="verification-form">
              <div className="form-group">
                <label htmlFor="certificateNumber">Certificate Number *</label>
                <input
                  type="text"
                  id="certificateNumber"
                  value={certificateNumber}
                  onChange={(e) => setCertificateNumber(e.target.value)}
                  placeholder="Enter certificate number (e.g., IOOSA-2023-001234)"
                  required
                />
                <p className="help-text">
                  Find the certificate number on the bottom right corner of your certificate
                </p>
              </div>
              
              <div className="form-actions">
                <button 
                  type="submit" 
                  className="verify-btn"
                  disabled={isVerifying || !certificateNumber}
                >
                  {isVerifying ? 'Verifying...' : 'Verify Certificate'}
                </button>
                <button 
                  type="button" 
                  className="reset-btn"
                  onClick={handleReset}
                >
                  Reset
                </button>
              </div>
            </form>
            
            {verificationResult && (
              <div className={`verification-result ${verificationResult.valid ? 'valid' : 'invalid'}`}>
                <div className="result-header">
                  <div className="result-icon">
                    {verificationResult.valid ? '✅' : '❌'}
                  </div>
                  <div className="result-title">
                    <h3>
                      {verificationResult.valid 
                        ? 'Certificate Verified Successfully' 
                        : 'Certificate Not Found'
                      }
                    </h3>
                    <p>Verification Date: {verificationResult.verificationDate}</p>
                  </div>
                </div>
                
                {verificationResult.valid && (
                  <div className="result-details">
                    <div className="details-grid">
                      <div className="detail-item">
                        <span className="detail-label">Certificate Number</span>
                        <span className="detail-value">{verificationResult.certificateNumber}</span>
                      </div>
                      
                      <div className="detail-item">
                        <span className="detail-label">Trainee Name</span>
                        <span className="detail-value">{verificationResult.traineeName}</span>
                      </div>
                      
                      <div className="detail-item">
                        <span className="detail-label">Course Name</span>
                        <span className="detail-value">{verificationResult.course}</span>
                      </div>
                      
                      <div className="detail-item">
                        <span className="detail-label">Completion Date</span>
                        <span className="detail-value">{verificationResult.completionDate}</span>
                      </div>
                      
                      <div className="detail-item">
                        <span className="detail-label">Expiry Date</span>
                        <span className="detail-value">{verificationResult.expiryDate}</span>
                      </div>
                      
                      <div className="detail-item">
                        <span className="detail-label">Status</span>
                        <span className={`status-badge ${verificationResult.status.toLowerCase()}`}>
                          {verificationResult.status}
                        </span>
                      </div>
                    </div>
                    
                    <div className="result-footer">
                      <p className="note">
                        <strong>Note:</strong> This certificate has been verified and is authentic. 
                        Employers and organizations can trust the validity of this certification.
                      </p>
                      <button className="print-btn">Print Verification</button>
                    </div>
                  </div>
                )}
                
                {!verificationResult.valid && (
                  <div className="invalid-result">
                    <p>
                      The certificate number <strong>{certificateNumber}</strong> could not be found 
                      in our records. Please check the number and try again.
                    </p>
                    <div className="troubleshoot">
                      <h4>Troubleshooting:</h4>
                      <ul>
                        <li>Check for typos in the certificate number</li>
                        <li>Ensure you're entering the complete certificate number</li>
                        <li>Contact us if you believe there's an error</li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Why Verify Section */}
      <section className="why-verify-section">
        <div className="container">
          <div className="section-header">
            <h2>Why Verify Certificates?</h2>
            <p>The importance of certificate verification for employers and organizations</p>
          </div>
          
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">🛡️</div>
              <h3>Ensure Authenticity</h3>
              <p>Verify that certificates are genuine and issued by our accredited academy</p>
            </div>
            
            <div className="benefit-card">
              <div className="benefit-icon">👥</div>
              <h3>Trustworthy Workforce</h3>
              <p>Confirm that your team members have legitimate safety training credentials</p>
            </div>
            
            <div className="benefit-card">
              <div className="benefit-icon">⚖️</div>
              <h3>Compliance Assurance</h3>
              <p>Meet regulatory requirements for certified safety professionals</p>
            </div>
            
            <div className="benefit-card">
              <div className="benefit-icon">🏢</div>
              <h3>Corporate Safety</h3>
              <p>Maintain high safety standards with verified competent personnel</p>
            </div>
          </div>
        </div>
      </section>

      {/* Instructions Section */}
      <section className="instructions-section">
        <div className="container">
          <div className="instructions-content">
            <h2>How to Verify Certificates</h2>
            <div className="instructions-steps">
              <div className="step">
                <div className="step-number">1</div>
                <h3>Locate Certificate Number</h3>
                <p>Find the unique certificate number on the certificate document</p>
              </div>
              
              <div className="step">
                <div className="step-number">2</div>
                <h3>Enter the Number</h3>
                <p>Type the certificate number in the verification form above</p>
              </div>
              
              <div className="step">
                <div className="step-number">3</div>
                <h3>Click Verify</h3>
                <p>Submit the form to check the certificate authenticity</p>
              </div>
              
              <div className="step">
                <div className="step-number">4</div>
                <h3>View Results</h3>
                <p>See detailed information about the certificate and trainee</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact for Issues */}
      <section className="verification-help">
        <div className="container">
          <div className="help-content">
            <div className="help-icon">❓</div>
            <div className="help-text">
              <h2>Need Help with Verification?</h2>
              <p>
                If you're experiencing issues with certificate verification or have questions 
                about the process, please contact our certification department.
              </p>
            </div>
            <a href="/contact" className="help-btn">Contact Support</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VerifyCertificatePage;
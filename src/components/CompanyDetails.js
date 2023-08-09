import React from 'react';
import './styles/CompanyDetails.css';

const CompanyDetails = ({ company }) => {
  return (
    <div className="company-details">
      <h3 className="company-details-heading">Company Details</h3>
      <div className="details">
        <p><span className="detail-label">Symbol:</span> {company.symbol}</p>
        <p><span className="detail-label">Company Name:</span> {company.companyName}</p>
        <p><span className="detail-label">Price:</span> {company.calculationPrice}</p>
        <p><span className="detail-label">Average Total Volume:</span> {company.avgTotalVolume}</p>
        <p><span className="detail-label">Change:</span> {company.change}</p>
        <p><span className="detail-label">Change Percent:</span> {(company.changePercent * 100).toFixed(2)}%</p>
        <p><span className="detail-label">Close:</span> {company.close ? `$${company.close.toFixed(2)}` : 'N/A'}</p>
        {/* Добавьте остальные данные здесь */}
      </div>
    </div>
  );
};

export default CompanyDetails;

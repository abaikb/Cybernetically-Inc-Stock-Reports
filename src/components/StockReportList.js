import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import CompanyDetails from './CompanyDetails';
import './styles/StockReportList.css';

const formatNumberWithCommas = number => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

const StockReportList = () => {
  const stockReports = useSelector(state => state.stockReports);
  const reportsPerPage = 10;
  const currentPage = useSelector(state => state.pagination.currentPage);
  const startIndex = (currentPage - 1) * reportsPerPage;
  const endIndex = startIndex + reportsPerPage;
  const displayedReports = stockReports.slice(startIndex, endIndex);

  const [selectedCompany, setSelectedCompany] = useState(null);

  const handleDragEnd = result => {
    // Handle drag end logic here
  };

  const showCompanyDetails = company => {
    setSelectedCompany(company);
  };

  return (
    <div className="stock-report-list">
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="stock-reports">
          {(provided) => (
            <table ref={provided.innerRef} {...provided.droppableProps}>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Symbol</th>
                  <th>Company Name</th>
                  <th>Price</th>
                  <th>Avg Total Volume</th>
                  <th>Change</th>
                  <th>Change Percent</th>
                  <th>Close</th>
                </tr>
              </thead>
              <tbody>
                {displayedReports.map((report, index) => (
                  <Draggable key={report.symbol} draggableId={report.symbol} index={index}>
                    {(provided) => (
                      <tr
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="report-row"
                        onClick={() => showCompanyDetails(report)}
                      >
                        <td>{startIndex + index + 1}</td>
                        <td>{report.symbol}</td>
                        <td>{report.companyName}</td>
                        <td className={report.change >= 0 ? 'price-positive' : 'price-negative'}>
                          {report.calculationPrice}
                        </td>
                        <td>{formatNumberWithCommas(report.avgTotalVolume)}$</td>
                        <td className={report.change >= 0 ? 'percent-positive' : 'percent-negative'}>
                          {report.change.toFixed(2)}
                        </td>
                        <td className={report.changePercent >= 0 ? 'percent-positive' : 'percent-negative'}>
                          {(report.changePercent * 100).toFixed(2)}%
                        </td>
                        <td className={report.close ? (report.close >= 0 ? 'price-positive' : 'price-negative') : ''}>
                          {report.close ? `$${report.close.toFixed(2)}` : 'N/A'}
                        </td>
                      </tr>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder} 
              </tbody>
            </table>
          )}
        </Droppable>
      </DragDropContext>
      {selectedCompany && <CompanyDetails company={selectedCompany} />}
    </div>
  );
};

export default StockReportList;

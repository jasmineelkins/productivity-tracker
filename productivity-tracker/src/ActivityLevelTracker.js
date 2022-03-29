import React, { useState } from "react";
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';

function ActivityLevelTracker(props) {
  return (
    <div>
    <CalendarHeatmap
  startDate={new Date('2022-01-01')}
  endDate={new Date('2022-12-31')}
  values={[
    { date: '2022-03-01', count: 1 },
    { date: '2022-03-04', count: 2 },
    { date: '2022-03-07', count: 3 },
    { date: '2022-03-12', count: 4 },
    { date: '2022-03-18', count: 5 },
    { date: '2022-03-27', count: 6 },
    { date: '2022-03-30', count: 7 },
  
    // ...and so on
  ]}
  showWeekdayLabels={true}
  classForValue={(value) => {
    if (!value) {
      return 'color-empty';
    }
    return `color-scale-${value.count}`;
  }}
/>
    </div>
  );
}

export default ActivityLevelTracker;

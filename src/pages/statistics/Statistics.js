import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';

// third-party
import ReactApexChart from 'react-apexcharts';

// chart options
const areaChartOptions = {
  chart: {
    height: 450,
    type: 'area',
    toolbar: {
      show: false
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth',
    width: 2
  },
  grid: {
    strokeDashArray: 0
  }
};

// ==============================|| INCOME AREA CHART ||============================== //

const Statistics = ({ slot }) => {
  const theme = useTheme();

  const { primary, secondary } = theme.palette.text;
  const line = theme.palette.divider;

  const [options, setOptions] = useState(areaChartOptions);

  useEffect(() => {
    setOptions((prevState) => ({
      ...prevState,
      colors: [theme.palette.primary.main, theme.palette.primary[700]],
      xaxis: {
        categories:
          slot === 'month'
            ? ['اسفند', 'بهمن', 'دی', 'آذر', 'آبان', 'مهر', 'شهریور', 'مرداد', 'تیر', 'خرداد', 'اردیبهشت', 'فروردین']
            : slot === 'week'
              ? ['جمعه', 'پنح شنبه', 'چهارشنبه', 'سه شنبه', 'دوشنبه', 'یکشنبه', 'شنبه']
              : Array.from({ length: 24 }, (_, i) => `${i}`),
        labels: {
          style: {
            colors: new Array(24).fill(secondary)
          }
        },
        axisBorder: {
          show: true,
          color: line
        },
        tickAmount: slot === 'month' ? 11 : slot === 'week' ? 6 : 23
      },
      yaxis: {
        labels: {
          style: {
            colors: [secondary]
          }
        }
      },
      grid: {
        borderColor: line
      },
      tooltip: {
        theme: 'light'
      }
    }));
  }, [primary, secondary, line, theme, slot]);

  const [series, setSeries] = useState([
    {
      name: 'تردد',
      data:
        slot === 'month'
          ? [110, 60, 150, 35, 60, 36, 26, 45, 65, 52, 53, 41]
          : slot === 'week'
            ? [11, 32, 45, 32, 34, 52, 41]
            : Array.from({ length: 24 }, () => Math.floor(Math.random() * 150))
    }
  ]);

  useEffect(() => {
    setSeries([
      {
        name: 'تردد',
        data: slot === 'month' 
          ? [110, 60, 150, 35, 60, 36, 26, 45, 65, 52, 53, 41] 
          : slot === 'week' 
            ? [11, 32, 45, 32, 34, 52, 41] 
            : Array.from({ length: 24 }, () => Math.floor(Math.random() * 150))
      }
    ]);
  }, [slot]);

  return <ReactApexChart options={options} series={series} type="area" height={450} />;
};

Statistics.propTypes = {
  slot: PropTypes.string.isRequired
};

export default Statistics;

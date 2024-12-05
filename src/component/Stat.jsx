import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

export default function Stats({c}) {
    const productSales = [
        { name: "Jan", clicks: c[0][1] },
        { name: "Feb", clicks: c[0][2] },
        { name: "Mar", clicks: c[0][3] },
        { name: "Apr", clicks: c[0][4] },
        { name: "May", clicks: c[0][5] },
        { name: "Jun", clicks: c[0][6] },
        { name: "Jul", clicks: c[0][7] },
        { name: "Aug", clicks: c[0][8] },
        { name: "Sep", clicks: c[0][9] },
        { name: "Oct", clicks: c[0][10] },
        { name: "Nov", clicks: c[0][11] },
        { name: "Dec", clicks: c[0][12] },
      ];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart width={500} height={400} data={productSales}>
        <YAxis />
        <XAxis dataKey="name"/>
        <CartesianGrid strokeDasharray={"5 5"} />
        <Tooltip />
        <Legend />
        <Area
          type={"monotone"}
          fill="#ff9300"
          stroke="#ff9300"
          dataKey="clicks"
        />
       
      </AreaChart>
    </ResponsiveContainer>
  );
}

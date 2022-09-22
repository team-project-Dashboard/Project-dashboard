import Layoutindex from "../components/Layoutindex";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import dynamic from "next/dynamic";


const data = [
  {
    name: 'Januari',
    uv: 4000,
  },
  {
    name: 'Februari',
    uv: 3000,
  },
  {
    name: 'Maret',
    uv: 2000,
  },
  {
    name: 'April',
    uv: 2780,
  },
  {
    name: 'Mei',
    uv: 1890,
  },
  {
    name: 'Juni',
    uv: 2390,
  },
  {
    name: 'Juli',
    uv: 3490,
  },
];


export default function Dashboard (){
  const Dynamic = dynamic(() =>
  import("../Dynamic").then((res) => console.log(res))
);
  return (
    
    <Layoutindex>
       
      <div>hello world</div>
      <ResponsiveContainer width="90%" aspect={3}>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid  horizontal="true" vertical="" stroke="#243240"/>
        <XAxis dataKey="name" tick={{fill:"#fff"}}/>
        <YAxis tick={{fill:"#fff"}} />
        <Tooltip contentStyle={{ backgroundColor: "#8884d8", color: "#fff" }} itemStyle={{ color: "#fff" }} cursor={false}/>
        <Line type="monotone" dataKey="Iphone" stroke="#8884d8" strokeWidth="5" dot={{fill:"#2e4355",stroke:"#8884d8",strokeWidth: 2,r:5}} activeDot={{fill:"#2e4355",stroke:"#8884d8",strokeWidth: 5,r:10}} />
        
        </LineChart>
      </ResponsiveContainer>
      <Dynamic />
    </Layoutindex>
  )
}
import Layoutindex from "../components/Layoutindex";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Januari',
    graduated: 4000,
  },
  {
    name: 'Februari',
    graduated: 3000,
  },
  {
    name: 'Maret',
    graduated: 2000,
  },
  {
    name: 'April',
    graduated: 2780,
  },
  {
    name: 'Mei',
    graduated: 1890,
  },
  {
    name: 'Juni',
    graduated: 2390,
  },
  {
    name: 'Juli',
    graduated: 3490,
  },
];


export default function Dashboard (){

  return (
    
    <Layoutindex>
      <div className="flex flex-wrap items-center justify-center text-[#fafafa] font-thin gap-8"> 
        <div className="bg-[#0f172a]/30 backdrop-blur-sm w-[400px] h-[250px] shadow-xl rounded-xl shadow-[#0f172a] flex flex-row">
          <div className="text-center-basic-1/2">
      <div className="text-3xl mb-4">Mentee Active</div>
      <div>Click here.</div>
          </div>
        </div>
        <div>
          <Image src="public/mentee.png"height={250} width={200} className="rounded-r-xl" />
        </div>
        <div className="bg-[#0f172a]/30 backdrop-blur-sm w-[400px] h-[250px] shadow-xl rounded-xl shadow-[#0f172a] flex flex-row">
          <div className="text-center-basic-1/2">
      <div className="text-3xl mb-4">Mentee Placement</div>
      <div>Click here.</div>
          </div>
        </div>
        <div>
          <Image src="public/mentee.png"height={250} width={200} className="rounded-r-xl" />
        </div>
        <div className="bg-[#0f172a]/30 backdrop-blur-sm w-[400px] h-[250px] shadow-xl rounded-xl shadow-[#0f172a] flex flex-row">
          <div className="text-center-basic-1/2">
      <div className="text-3xl mb-4">Mentee Feedback</div>
      <div>Click here.</div>
          </div>
        </div>
        <div>
          <Image src="public/mentee.png"height={250} width={200} className="rounded-r-xl" />
        </div>
      </div>
       <br />
       <br />
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
        <Tooltip contentStyle={{ backgroundColor: "[#8884d8]", color: "[#fff]" }} itemStyle={{ color: "[#fff]" }} cursor={false}/>
        <Line type="monotone" dataKey="graduated" stroke="#8884d8" strokeWidth="5" dot={{fill:"[#2e4355]",stroke:"[#8884d8]",strokeWidth: 2,r:5}} activeDot={{fill:"[#2e4355]",stroke:"[#8884d8]",strokeWidth: 5,r:10}} />
        
        </LineChart>
      </ResponsiveContainer>
    </Layoutindex>
  )
}
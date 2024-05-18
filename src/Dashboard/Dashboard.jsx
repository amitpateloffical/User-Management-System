import React, { useState } from "react";
import Header from "../Header/Header";
import { BsArrowUpRightCircle } from "react-icons/bs";
import { CiCreditCard1 } from "react-icons/ci";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import "./Dashboard.css";
import { RxCross2 } from "react-icons/rx";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import ApexChart from "../ApexChart/ApexChart ";

import SideBar from "../SideBar";
import PopUp from "../PopUp/PopUp";

const Dashboard = () => {
  const [open, setOpen] = React.useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleDrawer = (newOpen) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpen(newOpen);
  };

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const initialData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Dataset 1",
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 1,
        data: [65, 59, 80, 81, 56, 55, 40],
      },
    ],
  };
  const [chartData, setChartData] = useState(initialData);
  const updateData = () => {
    const newData = {
      ...chartData,
      datasets: [
        {
          ...chartData.datasets[0],
          data: chartData.datasets[0].data.map(() =>
            Math.floor(Math.random() * 100)
          ),
        },
      ],
    };
    setChartData(newData);
  };

  const DrawerList = () => (
    <Box role="presentation">
      <div className="pt-5 h-full w-full flex flex-col gap-5 px-5">
        <div className="flex justify-end">
          <RxCross2
            className="text-2xl cursor-pointer"
            onClick={toggleDrawer(false)}
          />
        </div>
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-[#e69743]">
            Request Under Reporting Person Approval
          </div>
          <div className="flex flex-col">
            <label htmlFor="">
              <b>Search</b>
            </label>
            <input
              type="text"
              className="border border-black w-[400px] h-[40px] rounded"
            />
          </div>
          <div>
            <img
              src="/login.png"
              alt=""
              style={{ height: "30px", width: "150px" }}
            />
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th>ACTION</th>
              <th>REQUEST NUMBER</th>
              <th>REQUEST TYPE</th>
              <th>DEPARTMENT</th>
              <th>EQUIPMENT ID</th>
              <th>ASSET ID</th>
              <th>APP NAME & VERSION</th>
              <th>REQUESTED ROLE</th>
              <th>REQUESTED GROUP</th>
              <th>REQUEST FOR</th>
              <th>REMARK</th>
              <th>SELF/EXTERNAL</th>
              <th>INITIATED BY</th>
              <th>INITIATED ON</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Edit</td>
              <td>123456</td>
              <td>Update</td>
              <td>IT</td>
              <td>EQ-001</td>
              <td>AS-002</td>
              <td>App v1.2</td>
              <td>Admin</td>
              <td>Group A</td>
              <td>John Doe</td>
              <td>None</td>
              <td>SELF</td>
              <td>Jane Smith</td>
              <td>2024-05-15</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Box>
  );


  return (
    <div>
      
      <div
        className={`content-with-fixed-header bg-gray-200 dashboard-container px-4 flex flex-col gap-10 ${
          sidebarOpen ? "ml-64" : ""
        } content-with-fixed-header bg-gray-200 dashboard-container px-4 flex flex-col gap-10`}
      >
        <div className="grid grid-cols-3 gap-10 ">
          <div
            className="bg-gradient-to-r rounded-xl from-purple-500 to-purple-700 p-8"
            onClick={() => setOpen(true)}
          >
            <div className="text-[24px] text-white flex items-center gap-2 ">
              0 <BsArrowUpRightCircle className="opacity-50" />
            </div>
            <div className="text-[15px] text-white">
              {" "}
              Request Under Reporting Person Approval
            </div>
          </div>
          <div
            className="bg-gradient-to-r from-sky-500 rounded-xl to-sky-700 p-8 "
            onClick={() => setOpen(true)}
          >
            <div className="text-[24px] text-white flex items-center gap-2">
              0 <BsArrowUpRightCircle className="opacity-50" />
            </div>
            <div className="text-[15px] text-white">
              {" "}
              Request Under QA Approval
            </div>
          </div>
          <div
            className="bg-gradient-to-r from-cyan-500 to-cyan-700 rounded-xl p-8 "
            onClick={() => setOpen(true)}
          >
            <div className="text-[24px] text-white flex items-center gap-2">
              0 <BsArrowUpRightCircle className="opacity-50" />
            </div>
            <div className="text-[15px] text-white"> Request For Execution</div>
          </div>
        </div>
        <div className="grid-cols-2 grid gap-10">
          <div
            className="bg-gradient-to-r rounded-xl bg-white px-8 flex gap-4 items-center "
            onClick={() => setOpen(true)}
          >
            <div className="bg-sky-200 text-sky-600 h-10 w-14 flex justify-center items-center text-[30px] rounded-lg">
              <CiCreditCard1 />
            </div>
            <div className="text-gray-400">
              <div className="text-[24px]  flex items-center gap-2 ">
                0 <BsArrowUpRightCircle className="opacity-50" />
              </div>
              <div className="text-[15px] ">
                Unlock User Request (System Admin)
              </div>
            </div>
          </div>
          <div
            className="bg-gradient-to-r rounded-xl bg-white p-8 flex gap-4 items-center "
            onClick={() => setOpen(true)}
          >
            <div className="bg-green-200 text-green-600 h-10 w-14 flex justify-center items-center text-[30px] rounded-lg">
              <CiCreditCard1 />
            </div>
            <div className="text-gray-400">
              <div className="text-[24px]  flex items-center gap-2 ">
                0 <BsArrowUpRightCircle className="opacity-50" />
              </div>
              <div className="text-[15px] ">
                Forgot Password Request(System Admin)
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3">
          <div className="col-span-2 ">
            <div>
              <Bar
                data={chartData}
                options={{
                  title: {
                    display: true,
                    text: "Sample Bar Chart",
                    fontSize: 5,
                  },
                  legend: {
                    display: true,
                    position: "right",
                  },
                }}
              />
              <button onClick={updateData}>Update Data</button>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div
              className="bg-gradient-to-r rounded-xl from-fuchsia-300 to-purple-700 p-8"
              onClick={() => setOpen(true)}
            >
              <div className="text-[24px] text-white flex items-center gap-2 ">
                0 <BsArrowUpRightCircle className="opacity-50" />
              </div>
              <div className="text-[15px] text-white">
                {" "}
                Request Under Reporting Person Approval
              </div>
            </div>
            <div
              className="bg-gradient-to-r rounded-xl from-teal-200 to-blue-500 p-8"
              onClick={() => setOpen(true)}
            >
              <div className="text-[24px] text-white flex items-center gap-2 ">
                0 <BsArrowUpRightCircle className="opacity-50" />
              </div>
              <div className="text-[15px] text-white">
                {" "}
                Request Under Reporting Person Approval
              </div>
            </div>
            <div
              className="bg-gradient-to-r rounded-xl from-red-200 to-orange-400 p-8"
              onClick={() => setOpen(true)}
            >
              <div className="text-[24px] text-white flex items-center gap-2 ">
                0 <BsArrowUpRightCircle className="opacity-50" />
              </div>
              <div className="text-[15px] text-white">
                {" "}
                Request Under Reporting Person Approval
              </div>
            </div>
            <div className="w-full">
              <ApexChart />
            </div>
          </div>
        </div>
      </div>
      <div>
        <Drawer open={open} onClose={toggleDrawer(false)} anchor="top">
          <DrawerList />
        </Drawer>
      </div>
      
      
    </div>
  );
};

export default Dashboard;
 
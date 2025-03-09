import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Administration from "../pages/administration/Administration";
import Alumni from "../pages/alumni/AlumniTable";

import SeatVacancy from "../pages/SeatVacancy/SeatVacancy";
import Notice from "../pages/Notice/Notice";
import FloorList from "../pages/Room/FloorList";
import RoomList from "../pages/Room/RoomList";
import RoomDetails from "../pages/Room/RoomDetails";
import SeatDetails from "../pages/Room/SeatDetails";
import UpdateSeat from "../pages/Room/UpdateSeat";
import SeatSwap from "../pages/SwapSeat/SwapSeat";




const router = createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        children: [
          {
            path:"/",
            element:<Home></Home>
          },
          {
            path:"/about",
            element:<About></About>
          },
          {
            path:'/administration',
            element:<Administration></Administration>
          },
          {
            path:"/alumni",
            element:<Alumni></Alumni>
          },
          {
            path:'/floorList',
            element:<FloorList></FloorList>
          },
          {
            path:'/floor/:floorNumber',
            element:<RoomList></RoomList>
          },
          {
            path:"/room/:roomNumber",
            element:<RoomDetails></RoomDetails>
          },

          {
            path:'/notice',
            element:<Notice></Notice>
          },
          {
            path:'/seat-vacancy',
            element:<SeatVacancy></SeatVacancy>
          },
          {
            path: "/contact",
            element:<Contact></Contact>
          },
          {
            path:"/details/:roomNumber/:seatId",
            element:<SeatDetails></SeatDetails>
          },
          {
            path:"/update/:roomNumber/:seatId",
            element:  <UpdateSeat></UpdateSeat>
          },
          {
            path: "/swap",
            element: <SeatSwap></SeatSwap>
          }

        ]

    }
])

export default router;
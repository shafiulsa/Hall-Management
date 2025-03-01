import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Administration from "../pages/administration/Administration";
import Alumni from "../pages/alumni/Alumni";
import Room from "../pages/Room/Room";
import SeatVacancy from "../pages/SeatVacancy/SeatVacancy";
import Notice from "../pages/Notice/Notice";



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
            path:'/room',
            element:<Room></Room>
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
          }

        ]

    }
])

export default router;
import AppRouter from "./config/approuter";
import "bootstrap/dist/css/bootstrap.min.css";
import SMNavbar from "./components/SMNavbar";
import { BrowserRouter } from "react-router-dom";
import SMAccordian from "./components/SMAccordian";
import SMCarousel from "./components/SMCarousel";
import { Box } from "@mui/system";
import SMDropdown from "./components/SMDropdown";
import Registration from "./screens/registration";

function App() {

  const slides = [
    {
      imgLink: "https://th.bing.com/th/id/R.3d88a927f8529dcba03364b09d98adbe?rik=JYmQaMVSULpYQg&riu=http%3a%2f%2fthewowstyle.com%2fwp-content%2fuploads%2f2015%2f01%2fnature-images.jpg&ehk=BNPsuSOUR7ATZ3EpRwxx1xFl7LUbO3tYlu1wFLCBrCE%3d&risl=&pid=ImgRaw&r=0",
      label: "Hello world",
      text: "My name is Muhammad Ali"
    },
    {
      imgLink: "https://www.pixelstalk.net/wp-content/uploads/2016/07/Wallpapers-pexels-photo.jpg",
      label: "Hello world",
      text: "My name is Muhammad Ali"
    },
    {
      imgLink: "https://th.bing.com/th/id/R.9069ae2c83237354d556ac82e37c8066?rik=wVvlGFIhBYX5bg&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f06%2fHD-images-of-nature-download.jpg&ehk=J7hY3CfwcsW7lTkuGbE3nQPUYPdt1OTluYfKHRW62qs%3d&risl=&pid=ImgRaw&r=0",
      label: "Hello world",
      text: "My name is Muhammad Ali"
    }
  ]


  const accordian = [
    {
      text: "Accordian 1",
      insideText: "My name is Muhammad Ali"
    },
    {
      text: "Accordian 2",
      insideText: "My name is Muhammad Ali Shoaib"
    },

  ]

  const dropdowns = [
    {
      displayName: "Link",
      options: [
        {
          name: "Dashboard",
          referenceLink: "dashboard"
        },
        {
          name: "Login",
          referenceLink: "login"
        }
      ]
    },
    {
      displayName: "List",
      options: [
        {
          name: "Post",
          referenceLink: "post"
        },
        {
          name: "Comments",
          referenceLink: "comments"
        }
      ]
    }
  ]

  const links = [
    {
      displayName: "Home",
      reference: "dashboard"
    },
    {
      displayName: "Login",
      reference: "login"
    }
  ]

  return (

    <>

      <AppRouter />
      {/* 
      <h1>Navbar:</h1>
      <h3>Props:</h3>
      <ol>
        <li>Title : Title/Heading given at right corner of the navbar</li>
        <li>bg : background color of whole navbar</li>
        <li>links : array of objects, object consists of display name and reference for link</li>
        <li>sticky : property given to make the navbar sticky or not</li>
        <li>dropdowns : array of objects for including dropdowns in navbar , object consists of displayName for the drop down and a nested array for options inside dropdown along with their reference link</li>
        <li>buttonVariant : button at left corner is given variant if not given by user then it is set by default "outline-success"</li>
        <li>buttonText : text inside that button</li>
      </ol>

      <Box className="w-50 mb-5">
        <BrowserRouter>
          <SMNavbar title="SMNavbar" links={links} dropdowns={dropdowns} buttonText="Search" />
        </BrowserRouter>
        <AppRouter />
      </Box>



      <Box className="mb-5">

        <h1>Dropdown:</h1>
        <h3>Props:</h3>
        <ol>
          <li>dropdowns : array of objects for including dropdowns in navbar , object consists of displayName for the drop down and a nested array for options inside dropdown along with their reference link </li>
        </ol>

        <SMDropdown dropdowns={dropdowns} />
      </Box>

      <Box className="mb-5">
        <h1>Accordian:</h1>
        <h3>Props:</h3>

        <ol>
          <li>data : array of objects given, object consists of an outside text and inside text of the accordian</li>
        </ol>
        <SMAccordian data={accordian} />
      </Box>

      <Box className="mb-5">
        <h1>Carousel:</h1>
        <h3>Props:</h3>

        <ol>
          <li>Slides : array of objects, objects consists of background image link, label and text </li>
          <li>Slide : to set slide of the Carousel true of false</li>
          <li>className : css properties given to the carousel</li>
        </ol>
        <SMCarousel slide={false} className="d-block w-100 vh-100" slides={slides} />
      </Box> */}


      











    </>
  );
}

export default App;

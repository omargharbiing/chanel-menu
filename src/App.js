import "./App.css";
import ChanelMenu from "./chanel-menu/chanel-menu";

const menuData = [
  {
    label: "designplox",
  },
  {
    label: "artists",
    children: [{ label: "Submenu 3-1" }, { label: "Submenu 3-2" }],
  },
  {
    label: "albums",
    children: [
      {
        label: "get your wings",
        children: [{ label: "Submenu 3-1" }, { label: "Submenu 3-2" }],
      },
      {
        label: "hotel california",
        children: [{ label: "Submenu 3-1" }, { label: "Submenu 3-2" }],
      },
      {
        label: "physical graffiti",
        children: [
          { label: "houses of the holy" },
          { label: "in my time of dying" },
        ],
      },
    ],
  },
  {
    label: "songs",
    children: [{ label: "Submenu 3-1" }, { label: "Submenu 3-2" }],
  },
  {
    label: "genres",
    children: [{ label: "Submenu 3-1" }, { label: "Submenu 3-2" }],
  },
  {
    label: "settings",
    children: [{ label: "Submenu 3-1" }, { label: "Submenu 3-2" }],
  },
];

function App() {
  return (
    <div className="App">
      <ChanelMenu menuData={menuData} />
    </div>
  );
}

export default App;

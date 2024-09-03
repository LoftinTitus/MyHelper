import { useContext } from "react";
import Menu from "./components/menu/menu";
import Table from "./components/table/table";
import { ThemeContext } from "./misctype/themes";
import "./styles.scss";
import ElementInfo from "./components/element/elementinfo";

function App() {
    const { theme } = useContext(ThemeContext);
    return (
        <div className="app" id={theme}>
            <Table />
            <Menu />
            <ElementInfo />
            <LanguageSwitcher />
        </div>
    );
}

export default App;

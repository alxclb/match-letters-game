import { useState } from "react";
import { List } from "./components/common/list";
import { Score } from "./components/common/score";
import {
    Footer,
    Header,
    Layout,
    Block,
    Flex,
} from "./components/layout/layout";
import { Main } from "./components/layout/main";
import { ScoreContext } from "./score-context";

function App() {
    const [score, setScore] = useState({ left: 26, hit: 0, miss: 0, list:[]});
    return (
        <Layout>
            <Header />
            <Flex>
                <ScoreContext.Provider value={{ score, setScore }}>
                    <Block>
                        <Main />
                        <List />
                    </Block>
                    <Score />
                </ScoreContext.Provider>
            </Flex>
            <Footer />
        </Layout>
    );
}

export default App;

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

function App() {
    return (
        <Layout>
            <Header />
            <Flex>
                <Block>
                    <Main />
                    <List />
                </Block>
                <Score />
            </Flex>
            <Footer />
        </Layout>
    );
}

export default App;

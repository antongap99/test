import {GroupList} from "./Widget/GroupList/GroupList.tsx";
import {MainPage} from "./pages/MainPage/MainPage.tsx";
import {
    AppRoot,
    View,
    Panel, SplitLayout, SplitCol,
} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import {FilterProvider} from "./features/SortableGroups/model/context.tsx";

function App() {
    return (
        <AppRoot>
            <View activePanel="main">
                <Panel id="main">
                    <MainPage>
                        <FilterProvider>
                            <SplitLayout>
                                <SplitCol width={280}>
                                    <div></div>
                                </SplitCol>
                                <SplitCol>
                                    <div></div>
                                </SplitCol>
                            </SplitLayout>
                        </FilterProvider>
                    </MainPage>
                </Panel>
            </View>
        </AppRoot>
    )
}

export default App

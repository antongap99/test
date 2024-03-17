import {MainPage} from "./pages/MainPage/MainPage.tsx";
import {
    AppRoot,
    View,
    Panel, SplitLayout, SplitCol,
} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import {ProductCart} from "./Widget/ProductCart/ui/ProductCart.tsx";
import {TotalResult} from "./Widget/TotalResult/ui/TotalResult.tsx";

function App() {
    return (
        <AppRoot>
            <View activePanel="main">
                <Panel id="main">
                    <MainPage>
                            <SplitLayout style={{ justifyContent: 'center', maxWidth: 1280, margin: '0 auto' }}>
	                            <SplitCol maxWidth={600}>
		                            <ProductCart/>
	                            </SplitCol>
                                <SplitCol maxWidth={280}>
                                    <TotalResult/>
                                </SplitCol>
                            </SplitLayout>
                    </MainPage>
                </Panel>
            </View>
        </AppRoot>
    )
}

export default App

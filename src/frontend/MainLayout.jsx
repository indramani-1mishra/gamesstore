import Header from "@/frontend/layout/Header";
import Footer from "@/frontend/layout/Footer";

const MainLayout=({ children })=> {
    return (
        <>
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
        </div>
        </>
    );
}

export default MainLayout;
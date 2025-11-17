import { Header } from "./header";
import { Container } from "./container";
import { Footer } from "./footer";

export function MainLayout() {
  return (
    <div className="grid grid-cols-1 gap-0">
      <Header />
      <Container />
      <Footer />
    </div>
  );
}

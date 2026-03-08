import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="px-0 pb-12 pt-9 text-center text-sm text-muted">
      <Container>© {new Date().getFullYear()} Lele Matoos · Marca autoral old school</Container>
    </footer>
  );
}
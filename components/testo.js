import Container from '@mui/material/Container';

export default function Testo({ children, maxWidth="lg", fixed = true }) {
    return (
        <Container maxWidth={ maxWidth } fixed={fixed}>
            { children }
        </Container>
    )
}
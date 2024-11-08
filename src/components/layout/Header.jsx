import { Nav } from './Nav';

function Header() {
    const navArr = [{ title: 'home' }, { title: 'about' }, { title: 'login' }];
    return (
        <header>
            <h1>Logo</h1>
            <Nav nav={navArr} />
        </header>
    );
}
export default Header;

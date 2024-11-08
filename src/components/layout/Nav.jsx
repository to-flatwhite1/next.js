export function Nav(props) {
    console.log(props);

    //map() 문법
    //array.map(첫번째인수는 함수 , value)
    //array.map((item이라는 변수,index의 번호)=>(반복코드))
    //map함수를 사용시 화살표 안쪽이 객체면 양쪽 겉에 소괄호 넣는다

    //html 사이에 js 코드 넣고 싶으면 { } 넣어서 입력하면 된다
    return (
        <nav>
            <ul>
                {props.nav.map((item, index) => (
                    <li key={index}>{item.title}</li>
                ))}
            </ul>
        </nav>
    );
}

function Section({ title, desc, children }) {
    console.log({ title, desc, children });
    // const props = {
    //   title: '섹션1',
    //   desc: '설명1'
    // };

    //객체 분해 할당
    /*  const { title, desc, children } = props; */

    return (
        <section>
            <div className="inner">
                <h2>{title}</h2>
                <p>{desc}</p>
                <div>{children}</div>
            </div>
        </section>
    );
}

export default Section;

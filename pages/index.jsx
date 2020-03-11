import Head from "next/head";
import { useEffect, useState } from "react";

export default () => {
  const [advs, setAdvs] = useState([]);
  useEffect(() => {
    setAdvs([
      { link: "http://www.baidu.com", name: "百度" },
      { link: "http://www.sina.com", name: "新浪" },
      { link: "http://duyiedu.com", name: "渡一" }
    ]);
  }, []);
  return (
    <div>
      <Head>
        <title>首页</title>
      </Head>
      <h1>Index 首页: {Math.random()}</h1>
      <ul>
        {advs.map(adv => (
          <li>
            <a href={adv.link} target="_blank">
              {adv.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

import { useState } from "react";
import { useRouter } from "next/router";

export default ({ onSubmit }) => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    loginId: "",
    loginPwd: ""
  });
  return (
    <div>
      <p>
        账号：
        <input
          type="text"
          value={formData.loginId}
          onChange={e => {
            setFormData({
              ...formData,
              loginId: e.target.value
            });
          }}
        />
      </p>
      <p>
        密码：
        <input
          type="password"
          value={formData.loginPwd}
          onChange={e => {
            setFormData({
              ...formData,
              loginPwd: e.target.value
            });
          }}
        />
      </p>
      <p>
        <button
          onClick={async () => {
            if (onSubmit) {
              const result = await onSubmit(formData);
              if (result) {
                router.push("/");
              } else {
                alert("账号或密码错误");
              }
            }
          }}
        >
          登录
        </button>
      </p>
    </div>
  );
};

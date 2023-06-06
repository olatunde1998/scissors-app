// import { type } from "os";

import { FC, useState } from "react";
import Input from "../input/input";
import Button from "../button/button";


interface trimFormProps {
  // name: string;
}

const TrimForm: FC<trimFormProps> = () => {
  const [url, setUrl] = useState();
  const handleOnChange = (e: any) => {
    return setUrl(e.target.value);
  };
  return (
    <div>
      <form action="">
        <div className="max-w-[500px] bg-white p-8">
          <Input
            type="text"
            placeholder="Paste URL here..."
            inputValue={url}
            onChangeValue={handleOnChange}
            inputIcon
            label
            className="border-[.03rem] border-[#005AE2] py-2"
          />
          <div className="flex gap-2 my-8">
            <Input
              type="text"
              placeholder="Customize domain"
              inputValue={url}
              // onChangeValue={handleOnChange}
              inputIcon
              label
              className="border-[.03rem] border-[#005AE2] py-2"
            />
            <Input
              type="text"
              placeholder="Type Alias here"
              inputValue={url}
              // onChangeValue={handleOnChange}
              inputIcon
              label
              className="border-[.03rem] border-[#005AE2] py-2"
            />
          </div>
          <Button
            btnText="Trim URL"
            btnIcon
            className="bg-[#005AE2] text-white text-[18px] py-4 mb-4 w-full"
          />
          <p className="text-[12px] text-[#005AE2] max-w-[400px] md:text-[16px]">
            By clicking TrimURL, I agree to the Terms of Service, Privacy Policy
            and Use of Cookies.
          </p>
        </div>
      </form>
    </div>
  );
};
export default TrimForm;

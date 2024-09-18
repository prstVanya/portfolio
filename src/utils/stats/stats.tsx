import { useEffect, useState } from "react"

const Age = () => {
  const [age, setAge] = useState(Date);

  const handleMyAge = () => {
    const t: any = 1000 * 60 * 60 * 24 * 365.2421897;
    const b: any = new Date('2003-11-05T03:00:00')
    setAge(((Date.now() - b) / t).toFixed(11));
  };

  useEffect(() => {
    const timer = setInterval(() => handleMyAge(), 25);
    return () => {
      clearInterval(timer);
    }
  }, []);

  return (
    <>
      {age}
    </>
  )
};

export default Age;


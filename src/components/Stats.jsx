import { useEffect, useState } from "react";

function Counter({ target, suffix = "+" }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000; // 2 seconds
    const increment = target / (duration / 20);

    const timer = setInterval(() => {
      start += increment;

      if (start >= target) {
        start = target;
        clearInterval(timer);
      }

      setCount(Math.floor(start));
    }, 20);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <h2>
      {count.toLocaleString()}
      {suffix}
    </h2>
  );
}

function Stats() {
  const stats = [
    { value: 100000, label: "Students Enrolled" },
    { value: 13, label: "Courses Offered" },
    { value: 25, label: "Expert Faculty" },
    { value: 120000, label: "Alumni Network" },
  ];

  return (
    <section className="stats-section">
      <div className="container">
        <div className="row g-3">
          {stats.map((stat, index) => (
            <div className="col-6 col-lg-3" key={index}>
              <div className="stat-box">
                <Counter target={stat.value} />
                <p>{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;
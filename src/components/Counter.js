const counterEmoji = ['1️⃣', '2️⃣', '3️⃣', '', '', '', ''];

const Counter = ({ start, counter }) => {
  return start ? (
    <div className='counter-container'>{counterEmoji[counter]}</div>
  ) : (
    ''
  );
};

export default Counter;

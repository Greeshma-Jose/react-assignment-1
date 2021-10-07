import { useState } from 'react';

function Expand(props) {
  const [isExpanded, setIsExpanded] = useState(props.expanded);
  const expand = () => setIsExpanded(!isExpanded);
  return (
    <div>
      <div onClick={expand}>
        <b>{props.name}</b> (click me to {isExpanded ? 'collapse' : 'expand'})
      </div>
      {isExpanded && <div className='expanded'>{props.name} expanded</div>}
    </div>
  );
}
export default Expand;


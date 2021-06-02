import React, { useState } from 'react';
import { ArrowSmDownIcon } from '@heroicons/react/outline';
import './faq.css';
function FaqCard({qp,ans}){
	const [ open, setopen ] = useState(false);
	return (
		<div className="accordion-item" onClick={() => setopen(!open)}>
			<div className={`accordion-item-header ${open ? `active` : ''} font-body text-lg font-normal text-gray-500`}>
                {qp}
            </div>
			<div className="accordion-item-body">
                <div className="accordion-item-body-content text-sm">
                {ans}
                </div>
            </div>
		</div>
	);
}

export default FaqCard;

import React from 'react';
import { contractAddress, etherScanAddress } from '../utils/index';

const Stabilizer = React.forwardRef(
	// eslint-disable-next-line
	({ isMobile }, ref) => {
		return (
			<div className="section" ref={ref}>
				<div className="container block is-fluid ">
					<h3 className="title is-size-3-tablet is-size-4-mobile">Stabilizer Pools</h3>
					<h4 className="subtitle is-size-4-tablet is-size-5-mobile">
						Custom pools helping to stabilize debase
					</h4>
				</div>
				<div className="container block is-fluid ">
					<div className={isMobile ? 'box content' : 'box content is-medium'}>
						<p>
							Stabilizers are custom pools built and approved by the community to help reward behaviors
							that could help stabilize debase to its target price in the long or short term. These pools
							will initially have no funding and will have custom triggers that will be checked against
							during every rebase. So if the pool's conditions are met, then the policy contract, which
							initially contains all 90% of Debase tokens, will transfer a configurable amount of funds to
							the stabilizer pool. The pool can then use its own unique strategies to distribute these
							funds.
						</p>
						<p>
							An example of a stabilizer pool that is currently{' '}
							<a href={etherScanAddress + contractAddress.stabilizerPool}> launched</a> counts the number
							of times debase hits its target price when a rebase happens. If the count goes above a
							configurable threshold, then the stabilizer pool will be funded with a configurable amount
							of Debase tokens to be rewarded to the community. To earn this reward the community will be
							staking in Debase/Dai-LP tokens, providing more long-term liquidity when the distribution
							pools have dried up. The neutral rebase count can also be configured to reset its count when
							the target price is not hit during a rebase.
						</p>
						<p>
							This is just a basic example of a stabilizer pool that will be usable whenever rebases are
							available. Other examples of potential pools could be where users will be rewarded wrapped
							Debase tokens with specialized time-based behaviors to de-incentivize it's holding or
							selling when debase is not at its target price, or pools that themselves can encapsulate
							behaviors used by other rebasing token like random rebases implemented by{' '}
							<a href="https://www.rmpl.io/">RMPL</a>. This is an area of development and the main focus
							of the community governance going forward.
						</p>
					</div>
				</div>
			</div>
		);
	}
);

export default Stabilizer;

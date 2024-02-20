import { PriceRangeProps } from './GraphFilter.types';

function PriceRangeSelector({minPrice,maxPrice,onChangeMinPrice, onChangeMaxPrice}: PriceRangeProps) {

  return (
    <div className="space-y-4">
      <div>
        <label htmlFor="minPrice">Minimum Price: ${minPrice}</label>
        <input
          type="range"
          id="minPrice"
          value={minPrice}
          min="0"
          max="5000"
          onChange={(e) => onChangeMinPrice(Number(e.target.value))}
          className="w-1/4"
        />
      </div>
      
      <div>
        <label htmlFor="maxPrice">Maximum Price: ${maxPrice}</label>
        <input
          type="range"
          id="maxPrice"
          value={maxPrice}
          min="0"
          max="5000"
          onChange={(e) => onChangeMaxPrice(Number(e.target.value))}
          className="w-1/4"
        />
      </div>

      <div>
        Selected Price Range: ${minPrice} - ${maxPrice}
      </div>
    </div>
  );
}

export default PriceRangeSelector;

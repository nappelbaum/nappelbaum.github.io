import React, { useRef } from "react";

const SelectStyle = (props) => {
  const selectContent = useRef(null);

  return (
    <div
      className={props.className}
      tabIndex="0"
      onBlur={() =>
        selectContent.current.classList.remove("select__content--active")
      }
      onKeyDown={(e) => {
        if (e.code === "Enter")
          selectContent.current.classList.toggle("select__content--active");
      }}
    >
      <div
        className="select__title"
        onClick={() => {
          selectContent.current.classList.toggle("select__content--active");
        }}
      >
        {props.catQuery ? props.catCaption : props.defaultval}
      </div>
      <div className="select__content" ref={selectContent}>
        <div>
          <input
            className="select__input"
            id="0"
            type="radio"
            name="myRadio"
            value=""
            defaultChecked={props.catQuery === "" ? true : false}
            onClick={(e) => {
              selectContent.current.classList.remove("select__content--active");
              props.selectCatQuery(e.target.value);
            }}
          />
          <label htmlFor="0" className="select__label">
            {props.defaultval}
          </label>
        </div>
        {props.options.map((option, index) => (
          <div key={option.cat}>
            <input
              className="select__input"
              id={index + 1}
              type="radio"
              name="myRadio"
              value={option.href}
              defaultChecked={option.href === props.catQuery ? true : false}
              onClick={(e) => {
                selectContent.current.classList.remove(
                  "select__content--active"
                );
                props.selectCatQuery(e.target.value);
              }}
            />
            <label htmlFor={index + 1} className="select__label">
              {option.cat}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectStyle;

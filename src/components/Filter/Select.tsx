import { FC, useState, useRef, useEffect } from 'react'
import styled, { css } from 'styled-components'

const MultipleSelectWrapper = styled.div<{ optionsVisible: boolean }>`
  display: block;
  width: 100%;
  position: relative;
  z-index: 1;
  cursor: pointer;
  background-color: #ffffff;

  .option-select {
    font-size: 13px;
    padding: 8px 10px;
    font-weight: 500;
    border: 1px solid #e6e9eb;
    background: transparent;
    width: 200px;
    text-align: left;
    text-transform: capitalize;
    cursor: pointer;
    border-radius: 2px;

    &:before {
      content: '';
      position: absolute;
      top: 50%;
      right: 12px;
      border: 5px solid transparent;
      border-top-color: #bdbdbd;
      margin-top: -2px;

      ${(props) =>
        props.optionsVisible &&
        `
          border-bottom-color: #bdbdbd;
          border-top-color: transparent;
          margin-top: -6px;
        `}
    }
  }

  .options-wrapper {
    position: absolute;
    width: 100%;

    .options {
      height: 0;
      width: 100%;
      max-height: 0;
      overflow: hidden;
      overflow-y: scroll;
      background-color: #ffffff;
      -webkit-transition: max-height 0.5s ease;
      display: flex;
      flex-flow: column;

      ${(props) =>
        props.optionsVisible &&
        css`
          height: auto;
          max-height: 200px;
          -webkit-transition: max-height 0.5s ease;
          box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.15);
          border-style: solid;
          border-width: 0 1px 1px 1px;
          border-color: #d2d6da;
        `}

      button {
        padding: 8px;
        display: flex;
        font-size: 12px;
        cursor: pointer;
        border: 0;

        &.active {
          font-weight: bold;
        }
      }
    }
  }
`

type ISelect = {
  onChange: (value: string | number) => void
  options: {
    name: string
    value: string | number
  }[]
  value: string | number
  placeholder: string
}

const Select: FC<ISelect> = ({ options, placeholder, value, onChange }) => {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const [optionsVisible, setOptionsVisible] = useState(false)

  const handleClickOutside = (event: MouseEvent) => {
    if (wrapperRef && wrapperRef.current) {
      if (
        event.target instanceof Node &&
        !wrapperRef.current.contains(event.target)
      ) {
        setOptionsVisible(false)
      }
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <MultipleSelectWrapper
      optionsVisible={optionsVisible}
      ref={wrapperRef}
      className="multiple-select-wrapper"
    >
      <button
        type="button"
        className="option-select"
        onClick={() => setOptionsVisible(true)}
      >
        {value || placeholder}
      </button>
      <div className="options-wrapper">
        <div className="options">
          {options.map((item, index) => {
            const idx = `${index}-${item.name}`
            const classNameList = ['option']
            if (item.value === value) classNameList.push('active')
            return (
              <button
                type="button"
                key={idx}
                className={classNameList.join(' ')}
                onClick={() => {
                  setOptionsVisible(false)
                  onChange(item.value)
                }}
              >
                {item.name}
              </button>
            )
          })}
        </div>
      </div>
    </MultipleSelectWrapper>
  )
}

export default Select

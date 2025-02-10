import { useState, forwardRef, type InputHTMLAttributes } from 'react';
import { Box, Container, Label } from './style';
import type { FieldError } from 'react-hook-form';

interface FormProps extends InputHTMLAttributes<HTMLInputElement> {
  optional?: boolean;
  grid: string;
  error?: FieldError
}

export const InputFlex = forwardRef<HTMLInputElement, FormProps>(
  ({ error,optional, grid,onFocus,onBlur, ...rest }, ref) => {
    const [isFocused, setIsFocused] = useState(false);

    function handleFocus(event: React.FocusEvent<HTMLInputElement>) {
      setIsFocused(true);
      onFocus?.(event)
    }

    function handleBlur(event: React.FocusEvent<HTMLInputElement>) {
      setIsFocused(false);
      onBlur?.(event)
    }

    return (
      <Box $grid={grid}>
        <Container  $active={isFocused}>
          <Label>
            <input
              ref={ref} 
              onFocus={handleFocus}
              onBlur={handleBlur}
              {...rest}
            />
            {optional && <span>Opcional</span>}
          </Label>
        </Container>
        {error?.message ? (
        <span role="alert">{error.message}</span>
      ) : null}
      </Box>
    );
  }
);


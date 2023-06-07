import { css, style, tx } from "@twind/core";
import { useSnackbar } from "notistack";
import { HTMLAttributes, forwardRef } from "react";
import { RxCross1 } from "react-icons/rx";
import { useMemo } from "react";

interface IAlertProps extends HTMLAttributes<HTMLDivElement> {
  variant: "success" | "info" | "error" | "warning";
  message: string;
}

export const Alert = forwardRef<HTMLDivElement, IAlertProps>(
  ({ variant, message, id }, ref) => {
    const notificationStyles = useMemo(
      () =>
        style({
          base: tx(
            "max-w-[350px] w-full min-h-[48px] font-nunitoSans text-sm text-white py-2 px-4 rounded-lg flex gap-3 items-center"
          ),
          props: {
            variant: {
              success: css({
                background:
                  "linear-gradient(90deg, #359C11 14.62%, #39E736 119.74%)",
              }),
              info: css({
                background:
                  "linear-gradient(90deg, #1E38C1 14.62%, #48A6FC 119.74%)",
              }),
              error: css({
                background:
                  "linear-gradient(90deg, #C51919 14.62%, #F02995 119.74%)",
              }),
              warning: css({
                background:
                  "linear-gradient(90deg, #C27F1B 14.62%, #ECC436 119.74%)",
              }),
            },
          },
        }),
      []
    );

    const { closeSnackbar } = useSnackbar();

    const clickHandler = () => {
      closeSnackbar(id);
    };

    return (
      <section ref={ref} className={tx(notificationStyles({ variant }))}>
        {message}

        <RxCross1
          onClick={clickHandler}
          className={tx(
            "text-white ml-auto cursor-pointer min-w-[30px] max-w-[30px] text-xl! cursor-pointr"
          )}
        />
      </section>
    );
  }
);

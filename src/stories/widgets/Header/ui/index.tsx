import React from "react";

import Button from "@/stories/shared/ui/Button";
import cx from "@/utils";

import { HeaderStyled } from "./styled";

interface User {
  name: string;
}

export interface HeaderProps {
  user?: User;
  onLogin?: () => void;
  onLogout?: () => void;
  onCreateAccount?: () => void;
}

export default function Header({
  user,
  onLogin,
  onLogout,
  onCreateAccount,
}: HeaderProps) {
  return (
    <HeaderStyled className={cx("Header")}>
      <div className="storybook-header">
        <div>
          <h1>Acme</h1>
        </div>
        <div>
          {user ? (
            <>
              <span className="welcome">
                Welcome, <b>{user.name}</b>!
              </span>
              <Button size="small" onClick={onLogout} label="Log out" />
            </>
          ) : (
            <>
              <Button size="small" onClick={onLogin} label="Log in" />
              <Button
                primary
                size="small"
                onClick={onCreateAccount}
                label="Sign up"
              />
            </>
          )}
        </div>
      </div>
    </HeaderStyled>
  );
}

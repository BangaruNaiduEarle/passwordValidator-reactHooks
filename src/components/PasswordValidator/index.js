// Write your code here
import {useState} from 'react'
import {
  MainContainer,
  ValidatorHeading,
  ValidatorDescription,
  InputPassword,
  WarningPassword,
} from './styledComponents'

const PasswordValidator = () => {
  const [password, setPassword] = useState('')

  const onChangePassword = event => {
    setPassword(event.target.value)
  }

  return (
    <MainContainer>
      <ValidatorHeading>Password Validator</ValidatorHeading>
      <ValidatorDescription>
        Check how strong and secure is your password
      </ValidatorDescription>

      <InputPassword
        type="password"
        value={password}
        onChange={onChangePassword}
      />

      {password.length < 8 && (
        <WarningPassword>
          Your password must be at least 8 characters
        </WarningPassword>
      )}
    </MainContainer>
  )
}

export default PasswordValidator

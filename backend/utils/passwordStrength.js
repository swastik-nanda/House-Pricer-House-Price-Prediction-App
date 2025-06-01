// utils/passwordStrength.js

function getPasswordStrength(password) {
  if (!password) {
    return { strength: 0, label: "None", color: "bg-neutral-200" };
  }

  let strength = 0;
  if (password.length >= 8) strength += 1;
  if (/[A-Z]/.test(password)) strength += 1;
  if (/[0-9]/.test(password)) strength += 1;
  if (/[^A-Za-z0-9]/.test(password)) strength += 1;

  const strengthMap = [
    { label: "Weak", color: "bg-error-500" },
    { label: "Fair", color: "bg-warning-500" },
    { label: "Good", color: "bg-warning-500" },
    { label: "Strong", color: "bg-success-500" },
    { label: "Very Strong", color: "bg-success-500" },
  ];

  return {
    strength,
    ...strengthMap[strength],
  };
}

/**
 * Returns true if password strength is Good or above (strength >= 3)
 */
function isPasswordStrong(password) {
  const { strength } = getPasswordStrength(password);
  return strength >= 3; // You can adjust this threshold as needed
}

module.exports = isPasswordStrong;

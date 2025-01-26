import {
  Box,
  Button,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Formik } from "formik";
import { Link, useNavigate } from "react-router";
import * as Yup from "yup";

const initialValuesRegister = {
  email: "",
  password: "",
  picture: {
    name: "",
  },
};

const registerSchema = Yup.object({
  password: Yup.string().min(5, "5 chars min").required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
});

const Register = () => {
  const { palette } = useTheme();
  const navigate = useNavigate();
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const register = async (values, onSubmitProps) => {
    console.log("values", values);

    // this allows us to send form info with image
    const formData = new FormData();
    for (let value in values) {
      console.log("value", value);
      formData.append(value, values[value]);
    }
    formData.append("picturePath", values.picture.name);

    const savedUserResponse = await fetch(
      "http://localhost:3001/auth/register",
      {
        method: "POST",
        body: formData,
      }
    );
    const savedUser = await savedUserResponse.json();
    console.log("saved User : ", savedUser);

    onSubmitProps.resetForm();

    // if (savedUser) {
    //   setPageType("login");
    // }

    navigate("/");
  };

  const handleFormSubmit = async (values, onSubmitProps) => {
    console.log("Register handler: ", values);
    return await register(values, onSubmitProps);
  };

  return (
    <Formik
      onSubmit={handleFormSubmit}
      initialValues={initialValuesRegister}
      validationSchema={registerSchema}
    >
      {({
        values,
        errors,
        touched,
        handleBlur,
        handleChange,
        handleSubmit,
        setFieldValue,
        resetForm,
      }) => (
        <form onSubmit={handleSubmit}>
          <Box
            display="grid"
            gap="30px"
            gridTemplateColumns="repeat(4, minmax(0, 1fr))"
            sx={{
              "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
            }}
          >
            <TextField
              label="Email"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.email}
              name="email"
              error={Boolean(touched.email) && Boolean(errors.email)}
              helperText={touched.email && errors.email}
              sx={{ gridColumn: "span 4" }}
            />
            <TextField
              label="Password"
              type="password"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.password}
              name="password"
              error={Boolean(touched.password) && Boolean(errors.password)}
              helperText={touched.password && errors.password}
              sx={{ gridColumn: "span 4" }}
            />
          </Box>

          {/* BUTTONS */}
          <Box>
            <Button
              fullWidth
              type="submit"
              //   sx={{
              //     m: "2rem 0",
              //     p: "1rem",
              //     backgroundColor: palette.primary.main,
              //     color: palette.background.alt,
              //     "&:hover": { color: palette.primary.main },
              //   }}
            >
              REGISTER
            </Button>
            <Typography
              sx={{
                textDecoration: "underline",
                color: palette.primary.main,
                "&:hover": {
                  cursor: "pointer",
                  color: palette.primary.light,
                },
              }}
            >
              <Link href="/">Already have an account? Login here.</Link>
            </Typography>
          </Box>
        </form>
      )}
    </Formik>
  );
};

export default Register;

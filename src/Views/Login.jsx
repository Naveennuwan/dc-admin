import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GetCenters } from "../Redux/CenterRedux/CenterActions";
import { login } from "../Redux/UserRedux/UserActions";

export default function SignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { centers } = useSelector((state) => state.Center);
  const { loading, userInfo } = useSelector((state) => state.userLogin);

  useEffect(() => {
    dispatch(GetCenters());
  }, [dispatch]);

  useEffect(() => {
    if (userInfo) {
      if (userInfo.token) {
        navigate("/dashboard");
      } else {
        navigate("/");
      }
    } else {
      navigate("/");
    }
  }, [userInfo,  navigate]);

  const [center, setCenter] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (event) => {
    setCenter(event.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login({ center, email, password }));
  };

  return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box sx={{ mt: 1 }}>
            <InputLabel id="demo-simple-select-label">Center</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={center}
              label="Center"
              fullWidth
              onChange={handleChange}
            >
              {centers.map((c) => (
                <MenuItem key={c.key} value={c.id}>
                  {c.center}
                </MenuItem>
              ))}
            </Select>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              onChange={(e) => setEmail(e.target.value)}
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={submitHandler}
            >
              {loading ? "Loading..." : "Login"}
            </Button>
          </Box>
        </Box>
      </Container>
  );
}

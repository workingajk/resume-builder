import { useCallback, useEffect, useMemo, useState } from "react";
import axios from "axios";
import {
  Alert,
  AppBar,
  Avatar,
  Badge,
  Box,
  Breadcrumbs,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Checkbox,
  Chip,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Drawer,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  Link,
  Menu,
  MenuItem,
  Pagination,
  Paper,
  Radio,
  RadioGroup,
  Rating,
  Select,
  Skeleton,
  Slider,
  Snackbar,
  Stack,
  Switch,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tabs,
  TextField,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import { createTheme, styled, ThemeProvider } from "@mui/material/styles";
import {
  Add,
  Close,
  Delete,
  Edit,
  Home,
  Menu as MenuIcon,
  Notifications,
  Refresh,
  Save,
  Search,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";

// ------------------------------------------------------------
// API SERVICE
// ------------------------------------------------------------

const api = axios.create({
  baseURL: "https://dummyjson.com",
});

const getProducts = () => api.get("/products");
const deleteProduct = (id) => api.delete(`/products/${id}`);

// ------------------------------------------------------------
// REUSABLE STYLED COMPONENT
// Demonstrates styled() vs sx.
// ------------------------------------------------------------

const ProductCard = styled(Card)(({ theme }) => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  borderRadius: theme.shape.borderRadius * 2,
  overflow: "hidden",
}));

// ------------------------------------------------------------
// MAIN APP
// ------------------------------------------------------------

function AppContent({ mode, setMode }) {
  // Navigation
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [tab, setTab] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);

  // API state
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Product UI state
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [page, setPage] = useState(1);
  const [view, setView] = useState("cards");
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Dialog state
  const [formOpen, setFormOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);

  // Snackbar
  const [snackbar, setSnackbar] = useState({ open: false, message: "", severity: "success" });

  // Demo form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [course, setCourse] = useState("mern");
  const [accepted, setAccepted] = useState(false);
  const [gender, setGender] = useState("male");
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [price, setPrice] = useState(50);
  const [rating, setRating] = useState(4);

  // ----------------------------------------------------------
  // API FETCH
  // ----------------------------------------------------------

  const loadProducts = useCallback(async () => {
    setLoading(true);
    setError("");

    try {
      const response = await getProducts();
      setProducts(response.data.products || []);
    } catch {
      setError("Failed to load products.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    let active = true;

    const fetchProducts = async () => {
      setLoading(true);
      setError("");

      try {
        const response = await getProducts();
        if (active) {
          setProducts(response.data.products || []);
        }
      } catch {
        if (active) {
          setError("Failed to load products.");
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    };

    void fetchProducts();

    return () => {
      active = false;
    };
  }, []);

  // ----------------------------------------------------------
  // SEARCH + FILTER
  // ----------------------------------------------------------

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch = product.title
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesCategory =
        category === "all" || product.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [products, search, category]);

  const categories = useMemo(
    () => [...new Set(products.map((product) => product.category))],
    [products]
  );

  const productsPerPage = 6;
  const pageCount = Math.max(1, Math.ceil(filteredProducts.length / productsPerPage));
  const currentPage = Math.min(page, pageCount);
  const visibleProducts = filteredProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  // ----------------------------------------------------------
  // PRODUCT ACTIONS
  // ----------------------------------------------------------

  const openAddDialog = () => {
    setSelectedProduct(null);
    setName("");
    setEmail("");
    setFormOpen(true);
  };

  const openEditDialog = (product) => {
    setSelectedProduct(product);
    setName(product.title);
    setEmail("");
    setFormOpen(true);
  };

  const saveProduct = () => {
    if (!name.trim()) {
      setSnackbar({ open: true, message: "Product name is required.", severity: "error" });
      return;
    }

    if (selectedProduct) {
      setProducts((current) =>
        current.map((product) =>
          product.id === selectedProduct.id
            ? { ...product, title: name }
            : product
        )
      );
      showMessage("Product updated successfully.");
    } else {
      setProducts((current) => {
        const nextId = current.reduce(
          (highestId, product) => Math.max(highestId, Number(product.id) || 0),
          0
        ) + 1;
        const newProduct = {
          id: nextId,
          title: name,
          price: 99,
          category: "demo",
          thumbnail: "https://placehold.co/600x400?text=New+Product",
          rating: 4,
        };

        return [newProduct, ...current];
      });
      showMessage("Product added successfully.");
    }

    setFormOpen(false);
  };

  const askDelete = (product) => {
    setSelectedProduct(product);
    setDeleteOpen(true);
  };

  const confirmDelete = async () => {
    if (!selectedProduct) return;

    try {
      // DummyJSON simulates DELETE; the local React state is updated too.
      await deleteProduct(selectedProduct.id);
      setProducts((current) =>
        current.filter((product) => product.id !== selectedProduct.id)
      );
      showMessage("Product deleted successfully.");
    } catch {
      showMessage("Delete request failed.", "error");
    } finally {
      setDeleteOpen(false);
      setSelectedProduct(null);
    }
  };

  const showMessage = (message, severity = "success") => {
    setSnackbar({ open: true, message, severity });
  };

  // ----------------------------------------------------------
  // LOADING / ERROR / EMPTY STATES
  // ----------------------------------------------------------

  if (loading) {
    return (
      <Box sx={{ minHeight: "100vh", bgcolor: "background.default", p: 4 }}>
        <Container maxWidth="lg">
          <Stack spacing={2}>
            <Skeleton variant="text" width="35%" height={70} />
            <Skeleton variant="rectangular" height={80} />
            <Grid container spacing={2}>
              {[1, 2, 3].map((item) => (
                <Grid key={item} size={{ xs: 12, sm: 6, md: 4 }}>
                  <Skeleton variant="rectangular" height={320} />
                </Grid>
              ))}
            </Grid>
          </Stack>
        </Container>
      </Box>
    );
  }

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "background.default" }}>
      {/* ------------------------------------------------------
          APP BAR
      ------------------------------------------------------ */}
      <AppBar position="static">
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            sx={{ mr: 1, display: { xs: "inline-flex", md: "none" } }}
            onClick={() => setDrawerOpen(true)}
          >
            <MenuIcon />
          </IconButton>

          <Typography sx={{ flexGrow: 1 }} variant="h6">
            MUI Product Dashboard
          </Typography>

          <Tooltip title="Notifications">
            <IconButton color="inherit">
              <Badge badgeContent={4} color="error">
                <Notifications />
              </Badge>
            </IconButton>
          </Tooltip>

          <Tooltip title="Refresh products">
            <IconButton color="inherit" onClick={loadProducts}>
              <Refresh />
            </IconButton>
          </Tooltip>

          <IconButton color="inherit" onClick={(event) => setAnchorEl(event.currentTarget)}>
            <Avatar sx={{ width: 32, height: 32 }}>A</Avatar>
          </IconButton>

          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={() => setAnchorEl(null)}
          >
            <MenuItem onClick={() => setAnchorEl(null)}>Profile</MenuItem>
            <MenuItem onClick={() => setAnchorEl(null)}>Settings</MenuItem>
            <MenuItem onClick={() => setAnchorEl(null)}>Logout</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>

      {/* ------------------------------------------------------
          DRAWER
      ------------------------------------------------------ */}
      <Drawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        sx={{ display: { xs: "block", md: "none" } }}
      >
        <Box sx={{ width: 260, p: 2 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Navigation
          </Typography>
          <Stack spacing={1}>
            <Button startIcon={<Home />} fullWidth>
              Dashboard
            </Button>
            <Button startIcon={<Search />} fullWidth>
              Products
            </Button>
            <Button startIcon={<Save />} fullWidth>
              Reports
            </Button>
          </Stack>
        </Box>
      </Drawer>

      <Container maxWidth="lg" sx={{ py: 4 }}>
        {/* ----------------------------------------------------
            BREADCRUMBS + HEADER
        ---------------------------------------------------- */}
        <Breadcrumbs sx={{ mb: 2 }}>
          <Link underline="hover" color="inherit" href="#">
            Home
          </Link>
          <Typography color="text.primary">Products</Typography>
        </Breadcrumbs>

        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
          alignItems={{ xs: "stretch", sm: "center" }}
          spacing={2}
          sx={{ mb: 3 }}
        >
          <Box>
            <Typography variant="h4">Products</Typography>
            <Typography variant="body2" color="text.secondary">
              React + MUI CRUD dashboard demonstrating the PDF concepts.
            </Typography>
          </Box>

          <Stack direction="row" spacing={1}>
            <Tooltip title="Add product">
              <Button variant="contained" startIcon={<Add />} onClick={openAddDialog}>
                Add Product
              </Button>
            </Tooltip>

            <Tooltip title={mode === "light" ? "Dark mode" : "Light mode"}>
              <FormControlLabel
                sx={{ ml: 0 }}
                control={
                  <Switch
                    checked={mode === "dark"}
                    onChange={(event) => setMode(event.target.checked ? "dark" : "light")}
                  />
                }
                label="Theme"
              />
            </Tooltip>
          </Stack>
        </Stack>

        {/* ----------------------------------------------------
            TABS
        ---------------------------------------------------- */}
        <Paper sx={{ mb: 3 }}>
          <Tabs value={tab} onChange={(event, value) => setTab(value)} variant="scrollable">
            <Tab label="Overview" />
            <Tab label="Products" />
            <Tab label="Forms" />
            <Tab label="Components" />
          </Tabs>
        </Paper>

        {/* ----------------------------------------------------
            OVERVIEW
        ---------------------------------------------------- */}
        {tab === 0 && (
          <Stack spacing={3}>
            <Alert severity="info">
              This page combines MUI layout, icons, responsive design, forms, navigation,
              API state, CRUD interactions, dialogs, feedback, theme and reusable styling.
            </Alert>

            <Grid container spacing={2}>
              <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                <StatCard label="Products" value={products.length} />
              </Grid>
              <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                <StatCard label="Categories" value={categories.length} />
              </Grid>
              <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                <StatCard label="Visible" value={filteredProducts.length} />
              </Grid>
              <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                <StatCard label="Page" value={`${currentPage}/${pageCount}`} />
              </Grid>
            </Grid>

            <Paper sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>
                MUI layout primitives
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Box is the general styling/layout primitive, Container controls responsive
                content width, Stack handles one-dimensional spacing, and Grid handles
                responsive two-dimensional layouts.
              </Typography>
              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <Button variant="contained" startIcon={<Save />}>
                  Save
                </Button>
                <Button variant="outlined">Cancel</Button>
                <Button variant="text">Learn More</Button>
                <Button disabled>Disabled</Button>
              </Stack>
            </Paper>
          </Stack>
        )}

        {/* ----------------------------------------------------
            PRODUCTS
        ---------------------------------------------------- */}
        {tab === 1 && (
          <Stack spacing={3}>
            <Paper sx={{ p: 2 }}>
              <Stack
                direction={{ xs: "column", md: "row" }}
                spacing={2}
                alignItems={{ xs: "stretch", md: "center" }}
              >
                <TextField
                  label="Search products"
                  placeholder="Search products..."
                  value={search}
                  onChange={(event) => {
                    setSearch(event.target.value);
                    setPage(1);
                  }}
                  fullWidth
                  slotProps={{
                    input: {
                      startAdornment: (
                        <InputAdornment position="start">
                          <Search />
                        </InputAdornment>
                      ),
                    },
                  }}
                />

                <FormControl sx={{ minWidth: { md: 220 } }}>
                  <InputLabel>Category</InputLabel>
                  <Select
                    label="Category"
                    value={category}
                    onChange={(event) => {
                      setCategory(event.target.value);
                      setPage(1);
                    }}
                  >
                    <MenuItem value="all">All categories</MenuItem>
                    {categories.map((item) => (
                      <MenuItem key={item} value={item}>
                        {item}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>

                <FormControl sx={{ minWidth: { md: 150 } }}>
                  <InputLabel>View</InputLabel>
                  <Select
                    label="View"
                    value={view}
                    onChange={(event) => setView(event.target.value)}
                  >
                    <MenuItem value="cards">Cards</MenuItem>
                    <MenuItem value="table">Table</MenuItem>
                  </Select>
                </FormControl>
              </Stack>
            </Paper>

            {error && <Alert severity="error">{error}</Alert>}

            {!error && filteredProducts.length === 0 && (
              <Alert severity="info">No products found.</Alert>
            )}

            {filteredProducts.length > 0 && view === "cards" && (
              <Grid container spacing={2}>
                {visibleProducts.map((product) => (
                  <Grid key={product.id} size={{ xs: 12, sm: 6, md: 4 }}>
                    <ProductCard>
                      <CardMedia
                        component="img"
                        height="190"
                        image={product.thumbnail}
                        alt={product.title}
                      />
                      <CardContent sx={{ flexGrow: 1 }}>
                        <Stack direction="row" justifyContent="space-between" spacing={1}>
                          <Typography variant="h6" noWrap>
                            {product.title}
                          </Typography>
                          <Chip label={product.category} size="small" color="primary" />
                        </Stack>

                        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                          ${product.price}
                        </Typography>

                        <Rating
                          value={product.rating || 0}
                          precision={0.1}
                          readOnly
                          size="small"
                          sx={{ mt: 1 }}
                        />
                      </CardContent>

                      <CardActions>
                        <Button
                          size="small"
                          startIcon={<Visibility />}
                          onClick={() => showMessage(`Viewing ${product.title}`)}
                        >
                          View
                        </Button>
                        <Tooltip title="Edit">
                          <IconButton onClick={() => openEditDialog(product)}>
                            <Edit />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="Delete">
                          <IconButton color="error" onClick={() => askDelete(product)}>
                            <Delete />
                          </IconButton>
                        </Tooltip>
                      </CardActions>
                    </ProductCard>
                  </Grid>
                ))}
              </Grid>
            )}

            {filteredProducts.length > 0 && view === "table" && (
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Name</TableCell>
                      <TableCell>Category</TableCell>
                      <TableCell>Price</TableCell>
                      <TableCell>Rating</TableCell>
                      <TableCell>Actions</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {visibleProducts.map((product) => (
                      <TableRow key={product.id} hover>
                        <TableCell>{product.title}</TableCell>
                        <TableCell>
                          <Chip label={product.category} size="small" />
                        </TableCell>
                        <TableCell>${product.price}</TableCell>
                        <TableCell>{product.rating}</TableCell>
                        <TableCell>
                          <Stack direction="row">
                            <IconButton onClick={() => openEditDialog(product)}>
                              <Edit />
                            </IconButton>
                            <IconButton color="error" onClick={() => askDelete(product)}>
                              <Delete />
                            </IconButton>
                          </Stack>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            )}

            {filteredProducts.length > 0 && (
              <Stack alignItems="center">
                <Pagination
                  count={pageCount}
                  page={currentPage}
                  onChange={(_, value) => setPage(value)}
                  color="primary"
                />
              </Stack>
            )}
          </Stack>
        )}

        {/* ----------------------------------------------------
            FORMS
        ---------------------------------------------------- */}
        {tab === 2 && (
          <Paper sx={{ p: { xs: 2, md: 4 } }}>
            <Typography variant="h5" fontWeight={700} gutterBottom>
              MUI Forms
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
              Controlled TextFields, password visibility, Select, Checkbox, Radio, Switch,
              Slider and Rating.
            </Typography>

            <Grid container spacing={3}>
              <Grid size={{ xs: 12, md: 6 }}>
                <Stack spacing={2}>
                  <TextField
                    label="Name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    fullWidth
                  />

                  <TextField
                    label="Email"
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    fullWidth
                  />

                  <TextField
                    label="Password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    fullWidth
                    slotProps={{
                      input: {
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton onClick={() => setShowPassword((value) => !value)}>
                              {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                          </InputAdornment>
                        ),
                      },
                    }}
                  />

                  <FormControl fullWidth>
                    <InputLabel>Course</InputLabel>
                    <Select
                      label="Course"
                      value={course}
                      onChange={(event) => setCourse(event.target.value)}
                    >
                      <MenuItem value="mern">MERN</MenuItem>
                      <MenuItem value="mean">MEAN</MenuItem>
                      <MenuItem value="next">Next.js</MenuItem>
                    </Select>
                  </FormControl>

                  <FormControl>
                    <Typography variant="body2" sx={{ mb: 1 }}>
                      Gender
                    </Typography>
                    <RadioGroup
                      row
                      value={gender}
                      onChange={(event) => setGender(event.target.value)}
                    >
                      <FormControlLabel value="male" control={<Radio />} label="Male" />
                      <FormControlLabel value="female" control={<Radio />} label="Female" />
                    </RadioGroup>
                  </FormControl>

                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={accepted}
                          onChange={(event) => setAccepted(event.target.checked)}
                        />
                      }
                      label="Accept Terms"
                    />
                    <FormControlLabel
                      control={
                        <Switch
                          checked={notificationsEnabled}
                          onChange={(event) => setNotificationsEnabled(event.target.checked)}
                        />
                      }
                      label="Notifications"
                    />
                  </FormGroup>
                </Stack>
              </Grid>

              <Grid size={{ xs: 12, md: 6 }}>
                <Stack spacing={4}>
                  <Box>
                    <Typography gutterBottom>Price: ${price}</Typography>
                    <Slider
                      value={price}
                      onChange={(event, value) => setPrice(value)}
                      valueLabelDisplay="auto"
                    />
                  </Box>

                  <Box>
                    <Typography gutterBottom>Rating</Typography>
                    <Rating
                      value={rating}
                      onChange={(event, value) => setRating(value)}
                    />
                  </Box>

                  <Box
                    sx={{
                      p: 3,
                      borderRadius: 2,
                      bgcolor: "primary.main",
                      color: "primary.contrastText",
                    }}
                  >
                    <Typography variant="h6">Theme-aware sx</Typography>
                    <Typography variant="body2">
                      This Box uses palette values from the active MUI theme.
                    </Typography>
                  </Box>

                  <Stack direction="row" spacing={2}>
                    <Button
                      variant="contained"
                      startIcon={<Save />}
                      onClick={() => showMessage("Form values saved.")}
                    >
                      Save
                    </Button>
                    <Button variant="outlined" onClick={() => setName("")}>Clear</Button>
                  </Stack>
                </Stack>
              </Grid>
            </Grid>
          </Paper>
        )}

        {/* ----------------------------------------------------
            COMPONENTS
        ---------------------------------------------------- */}
        {tab === 3 && (
          <Stack spacing={3}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h5" fontWeight={700} gutterBottom>
                MUI Component Examples
              </Typography>

              <Stack direction="row" flexWrap="wrap" gap={1}>
                <Chip label="Active" color="success" />
                <Chip label="Pending" color="warning" />
                <Chip label="Error" color="error" />
                <Chip label="Default" />
              </Stack>
            </Paper>

            <Grid container spacing={2}>
              <Grid size={{ xs: 12, md: 6 }}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      Buttons and Icons
                    </Typography>
                    <Stack direction="row" spacing={1} flexWrap="wrap">
                      <Button variant="contained" startIcon={<Add />}>
                        Add
                      </Button>
                      <Button variant="outlined" endIcon={<Search />}>
                        Search
                      </Button>
                      <Tooltip title="Delete">
                        <IconButton color="error">
                          <Delete />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Close">
                        <IconButton>
                          <Close />
                        </IconButton>
                      </Tooltip>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>

              <Grid size={{ xs: 12, md: 6 }}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      Avatar + Badge
                    </Typography>
                    <Stack direction="row" spacing={3} alignItems="center">
                      <Avatar src="https://i.pravatar.cc/100?img=12" />
                      <Badge badgeContent={4} color="error">
                        <Notifications />
                      </Badge>
                      <Typography variant="body2">User notifications</Typography>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>

            <Paper sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>
                Typography variants
              </Typography>
              <Typography variant="h4">Heading 4</Typography>
              <Typography variant="h6">Heading 6</Typography>
              <Typography variant="body1">Body 1 — normal text</Typography>
              <Typography variant="body2">Body 2 — secondary text</Typography>
            </Paper>
          </Stack>
        )}
      </Container>

      {/* ------------------------------------------------------
          ADD / EDIT DIALOG
      ------------------------------------------------------ */}
      <Dialog open={formOpen} onClose={() => setFormOpen(false)} fullWidth maxWidth="sm">
        <DialogTitle>{selectedProduct ? "Edit Product" : "Add Product"}</DialogTitle>
        <DialogContent>
          <Stack spacing={2} sx={{ pt: 1 }}>
            <TextField
              label="Product name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              autoFocus
              fullWidth
            />
            <TextField
              label="Optional email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              fullWidth
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setFormOpen(false)}>Cancel</Button>
          <Button variant="contained" startIcon={<Save />} onClick={saveProduct}>
            Save
          </Button>
        </DialogActions>
      </Dialog>

      {/* ------------------------------------------------------
          DELETE CONFIRMATION DIALOG
      ------------------------------------------------------ */}
      <Dialog open={deleteOpen} onClose={() => setDeleteOpen(false)}>
        <DialogTitle>Delete Product?</DialogTitle>
        <DialogContent>
          <Typography>
            This action cannot be undone for the current UI state.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDeleteOpen(false)}>Cancel</Button>
          <Button color="error" variant="contained" onClick={confirmDelete}>
            Delete
          </Button>
        </DialogActions>
      </Dialog>

      {/* ------------------------------------------------------
          SNACKBAR + ALERT
      ------------------------------------------------------ */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={() => setSnackbar((current) => ({ ...current, open: false }))}
        message={snackbar.message}
      />
    </Box>
  );
}

export default function Test() {
  const [mode, setMode] = useState(() => localStorage.getItem("mode") || "light");

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: { main: "#6A1B9A" },
          secondary: { main: "#FF9800" },
          background: {
            default: mode === "light" ? "#f7f7f7" : "#121212",
          },
        },
        typography: {
          h4: { fontWeight: 700 },
        },
      }),
    [mode]
  );

  useEffect(() => {
    localStorage.setItem("mode", mode);
  }, [mode]);

  return (
    <ThemeProvider theme={theme}>
      <AppContent mode={mode} setMode={setMode} />
    </ThemeProvider>
  );
}

// ------------------------------------------------------------
// SMALL REUSABLE PRESENTATIONAL COMPONENT
// ------------------------------------------------------------

function StatCard({ label, value }) {
  return (
    <Card>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {label}
        </Typography>
        <Typography variant="h4" sx={{ mt: 1 }}>
          {value}
        </Typography>
      </CardContent>
    </Card>
  );
}

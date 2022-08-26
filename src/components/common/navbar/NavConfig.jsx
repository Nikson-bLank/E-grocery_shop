import useFetch from "../../../hooks/useFetch";

const NavConfig = () => {
  const { data } = useFetch("/get_all_categories");
  let NAV_ITEMS = [
    {
      label: "Home",
      href: "/",
    },
    { label: "Products", children: [] },
    { label: "Contact", href: "#" },
    { label: "My Orders", href: "#" },
  ];

  data?.result?.forEach((category) => {
    return NAV_ITEMS[1].children.push({
      id: category.id,
      label: category.category_name,
      href: `/category/${category.id}/products`,
    });
  });
  return NAV_ITEMS;
};

export default NavConfig;

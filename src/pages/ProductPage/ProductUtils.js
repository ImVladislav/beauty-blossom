export function getProductPath(productName, categories) {
  let productPath = "";

  for (let i = 0; i < categories.length; i++) {
    const category = categories[i];

    if (category.children && category.children.length > 0) {
      for (let j = 0; j < category.children.length; j++) {
        const subCategory = category.children[j];

        const product = subCategory.children.find(
          (item) => item.text === productName
        );

        if (product) {
          productPath = `${category.to || ""}`;
          break;
        }
      }
    }

    if (productPath) {
      break;
    }
  }

  return productPath;
}

export function getSubProductPath(productName, categories) {
  let productPath = "";

  for (let i = 0; i < categories.length; i++) {
    const category = categories[i];

    if (category.children && category.children.length > 0) {
      for (let j = 0; j < category.children.length; j++) {
        const subCategory = category.children[j];

        const product = subCategory.children.find(
          (item) => item.text === productName
        );

        if (product) {
          productPath = `${subCategory.to || ""}`;
          break;
        }
      }
    }

    if (productPath) {
      break;
    }
  }

  return productPath;
}

export function getSubSubProductPath(productName, categories) {
  let productPath = "";

  for (let i = 0; i < categories.length; i++) {
    const category = categories[i];

    if (category.children && category.children.length > 0) {
      for (let j = 0; j < category.children.length; j++) {
        const subCategory = category.children[j];
        const product = subCategory.children.find(
          (item) => item.text === productName
        );
        if (product) {
          productPath = product.to;
          break;
        }
      }
    }
    if (productPath) {
      break;
    }
  }

  return productPath;
}

export function getCategoryUrl(categoryName, nodes) {
  const findCategoryUrl = (name, nodes, parentUrl = "") => {
    for (const node of nodes) {
      const currentUrl = `${node.to || ""}`;

      if (node.children && node.children.length > 0) {
        const subCategoryUrl = findCategoryUrl(name, node.children, currentUrl);

        if (subCategoryUrl) {
          return subCategoryUrl;
        }
      } else if (node.text === name) {
        return currentUrl;
      }
    }

    return null;
  };

  return findCategoryUrl(categoryName, nodes);
}

export function getCategoryUrl2(categoryName, nodes) {
  const findCategoryUrl = (name, nodes, parentUrl = "") => {
    for (const node of nodes) {
      const currentUrl = `${node.to || ""}`;

      if (node.children && node.children.length > 0) {
        const subCategoryUrl = findCategoryUrl(name, node.children, currentUrl);

        if (subCategoryUrl) {
          return subCategoryUrl;
        }
      } else if (node.text === name) {
        // Find the last index of '/' in the currentUrl
        const lastSlashIndex = currentUrl.lastIndexOf("/");

        // Return the URL up to the last slash
        return lastSlashIndex !== -1
          ? currentUrl.substring(0, lastSlashIndex)
          : currentUrl;
      }
    }

    return null;
  };

  return findCategoryUrl(categoryName, nodes);
}

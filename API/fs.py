
from collections import defaultdict

files = defaultdict(lambda: {})


def ls(id, path):
    for x in files[id].keys():
        if x.startswith(path):
            yield x


def mkdir(id, path):
    files[id][path] = {}

    return files[id][path]


def rm(id, path):
    del files[id][path]


if __name__ == "__main__":
    # mkdir(1, "a/b/c")

    # # rm(1, "a/b/c")

    # print(list(ls(1, "a")))

    pass

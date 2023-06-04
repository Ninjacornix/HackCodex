import math
import random


def get_usage(id):
    return {"usage": [
        random.randint(0, 100) for _ in range(0, 10)
    ]}

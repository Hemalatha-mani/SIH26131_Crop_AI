# ============================================================
# CROPCARE AI CHATBOT
# ============================================================

def get_chatbot_response(question):

    question_lower = question.lower()

    # Disease questions
    if "early blight" in question_lower:
        return (
            "Early blight is a common fungal disease that affects "
            "tomato and potato plants. Remove infected leaves, "
            "avoid overhead watering, maintain proper spacing, "
            "and use suitable fungicide if needed."
        )

    if "late blight" in question_lower:
        return (
            "Late blight is a serious disease affecting potato "
            "and tomato plants. Remove infected plant parts, "
            "avoid excess moisture, improve air circulation, "
            "and use an appropriate fungicide when necessary."
        )

    if "bacterial spot" in question_lower:
        return (
            "Bacterial spot can affect tomato plants and causes "
            "dark spots on leaves and fruits. Remove infected "
            "plant material, avoid overhead watering, and maintain "
            "good field sanitation."
        )

    if "healthy" in question_lower:
        return (
            "A healthy crop leaf usually has a normal green color "
            "without unusual spots, lesions, yellowing, or pest damage. "
            "Continue regular monitoring and proper crop care."
        )

    # Prevention
    if "prevent" in question_lower or "prevention" in question_lower:
        return (
            "To prevent crop diseases, use healthy seeds, maintain "
            "proper plant spacing, avoid overwatering, remove infected "
            "plant parts, keep the field clean, and regularly monitor "
            "your crops."
        )

    # Watering
    if "water" in question_lower or "watering" in question_lower:
        return (
            "Water your crops according to their growth stage, soil "
            "condition, and weather. Avoid excessive watering and "
            "prefer watering near the plant roots rather than on leaves."
        )

    # General crop question
    if "crop" in question_lower or "plant" in question_lower:
        return (
            "Regularly inspect your crops for changes in leaf color, "
            "spots, holes, wilting, and pest activity. Early detection "
            "helps reduce crop damage."
        )

    # Default answer
    return (
        "I can help with crop diseases, prevention, watering, "
        "plant health, and farming guidance. Please ask a specific "
        "question about your crop."
    )
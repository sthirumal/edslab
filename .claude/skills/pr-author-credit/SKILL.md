---
name: pr-author-credit
description: Ensures PR descriptions include the author "Swapna Thirumala" when publishing a branch or drafting a pull request. Use when creating or editing pull request descriptions, publishing a branch, opening a PR, or when the user mentions PR description or author credit.
---

# PR Description Author Credit

## When to Apply

Apply this skill when:
- The user is publishing a branch or about to open a pull request
- Drafting or editing a PR description
- The user asks for help with a PR description or mentions "my name" in the context of a PR

## Required Content

Every PR description must include the author name **Swapna Thirumala**.

## Instructions

1. **When drafting a PR description**  
   Include "Swapna Thirumala" in the description. Prefer one of:
   - **Author:** Swapna Thirumala
   - **By:** Swapna Thirumala
   - A line such as: *This PR is authored by Swapna Thirumala.*

2. **When the user says they are publishing a branch or opening a PR**  
   Remind them that the PR description should include their name, and offer to draft or update the description with "Swapna Thirumala" included.

3. **When suggesting PR description text**  
   Always add the author line (e.g. `**Author:** Swapna Thirumala`) at the top or in a clear place in the suggested description.

## Example PR Description Snippet

```markdown
**Author:** Swapna Thirumala

## Summary
[Description of changes]

## Preview
https://{branch}--{repo}--{owner}.aem.page/{path}
```

## Notes

- This applies to PRs for this project (edslab / AEM Edge Delivery). The project’s AGENTS.md also requires a preview URL in the PR description; keep that and add the author line.
- If the user specifies a different name or format, follow their preference and consider updating this skill.
